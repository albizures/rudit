import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пенить: PerfectVerb = {
  name: Word('пенить', 1),
  singular1stPerson: Word('пеню', 1),
  singular2ndPerson: Word('пенишь', 1),
  singular3rdPerson: Word('пенит', 1),
  plural1stPerson: Word('пеним', 1),
  plural2ndPerson: Word('пените', 1),
  plural3rdPerson: Word('пенят', 1),
  masculinePast: Word('пенил', 1),
  femininePast: Word('пенила', 1),
  neuterPast: Word('пенило', 1),
  pluralPast: Word('пенили', 1),
  imperativeInformal: Word('пень', 1),
  imperativeFormal: Word('пеньте', 1),
  imperfect: [],
};

perfectVerbs.set(пенить.name.text, пенить);

export { пенить };