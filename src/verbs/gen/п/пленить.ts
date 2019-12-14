import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пленить: PerfectVerb = {
  name: Word('пленить', 4),
  singular1stPerson: Word('пленю', 4),
  singular2ndPerson: Word('пленишь', 4),
  singular3rdPerson: Word('пленит', 4),
  plural1stPerson: Word('пленим', 4),
  plural2ndPerson: Word('плените', 4),
  plural3rdPerson: Word('пленят', 4),
  masculinePast: Word('пленил', 4),
  femininePast: Word('пленила', 4),
  neuterPast: Word('пленило', 4),
  pluralPast: Word('пленили', 4),
  imperativeInformal: Word('плени', 4),
  imperativeFormal: Word('плените', 4),
  imperfect: [],
};

perfectVerbs.set(пленить.name.text, пленить);

export { пленить };