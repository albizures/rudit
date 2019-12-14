import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простонать: PerfectVerb = {
  name: Word('простонать', 7),
  singular1stPerson: Word('простону//_устар._простона'ю', 7),
  singular2ndPerson: Word('простону//_устар._', 7),
  singular3rdPerson: Word('простону//_устар._', 7),
  plural1stPerson: Word('простону//_устар._', 7),
  plural2ndPerson: Word('простону//_устар._', 7),
  plural3rdPerson: Word('простону//_устар._', 7),
  masculinePast: Word('простонал', 7),
  femininePast: Word('простонала', 7),
  neuterPast: Word('простонало', 7),
  pluralPast: Word('простонали', 7),
  imperativeInformal: Word('простону//_устари', 16),
  imperativeFormal: Word('простону//_устарите', 16),
  imperfect: [],
};

perfectVerbs.set(простонать.name.text, простонать);

export { простонать };