import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бомбить: PerfectVerb = {
  name: Word('бомбить', 4),
  singular1stPerson: Word('бомблю', 5),
  singular2ndPerson: Word('бомбишь', 4),
  singular3rdPerson: Word('бомбит', 4),
  plural1stPerson: Word('бомбим', 4),
  plural2ndPerson: Word('бомбите', 4),
  plural3rdPerson: Word('бомбят', 4),
  masculinePast: Word('бомбил', 4),
  femininePast: Word('бомбила', 4),
  neuterPast: Word('бомбило', 4),
  pluralPast: Word('бомбили', 4),
  imperativeInformal: Word('бомби', 4),
  imperativeFormal: Word('бомбите', 4),
  imperfect: ['разбомбить'],
};

perfectVerbs.set(бомбить.name.text, бомбить);

export { бомбить };