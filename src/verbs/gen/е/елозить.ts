import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const елозить: PerfectVerb = {
  name: Word('елозить', 2),
  singular1stPerson: Word('еложу', 2),
  singular2ndPerson: Word('елозишь', 2),
  singular3rdPerson: Word('елозит', 2),
  plural1stPerson: Word('елозим', 2),
  plural2ndPerson: Word('елозите', 2),
  plural3rdPerson: Word('елозят', 2),
  masculinePast: Word('елозил', 2),
  femininePast: Word('елозила', 2),
  neuterPast: Word('елозило', 2),
  pluralPast: Word('елозили', 2),
  imperativeInformal: Word('елозь', 2),
  imperativeFormal: Word('елозьте', 2),
  imperfect: [],
};

perfectVerbs.set(елозить.name.text, елозить);

export { елозить };