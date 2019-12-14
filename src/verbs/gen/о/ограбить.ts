import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограбить: PerfectVerb = {
  name: Word('ограбить', 3),
  singular1stPerson: Word('ограблю', 3),
  singular2ndPerson: Word('ограбишь', 3),
  singular3rdPerson: Word('ограбит', 3),
  plural1stPerson: Word('ограбим', 3),
  plural2ndPerson: Word('ограбите', 3),
  plural3rdPerson: Word('ограбят', 3),
  masculinePast: Word('ограбил', 3),
  femininePast: Word('ограбила', 3),
  neuterPast: Word('ограбило', 3),
  pluralPast: Word('ограбили', 3),
  imperativeInformal: Word('ограбь', 3),
  imperativeFormal: Word('ограбьте', 3),
  imperfect: ['грабить'],
};

perfectVerbs.set(ограбить.name.text, ограбить);

export { ограбить };