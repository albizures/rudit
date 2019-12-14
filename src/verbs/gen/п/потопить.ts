import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потопить: PerfectVerb = {
  name: Word('потопить', 5),
  singular1stPerson: Word('потоплю', 6),
  singular2ndPerson: Word('потопишь', 3),
  singular3rdPerson: Word('потопит', 3),
  plural1stPerson: Word('потопим', 3),
  plural2ndPerson: Word('потопите', 3),
  plural3rdPerson: Word('потопят', 3),
  masculinePast: Word('потопил', 5),
  femininePast: Word('потопила', 5),
  neuterPast: Word('потопило', 5),
  pluralPast: Word('потопили', 5),
  imperativeInformal: Word('потопи', 5),
  imperativeFormal: Word('потопите', 5),
  imperfect: [],
};

perfectVerbs.set(потопить.name.text, потопить);

export { потопить };