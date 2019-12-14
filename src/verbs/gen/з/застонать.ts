import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застонать: PerfectVerb = {
  name: Word('застонать', 6),
  singular1stPerson: Word('застону//_устар._застона'ю', 6),
  singular2ndPerson: Word('застону//_устар._', 6),
  singular3rdPerson: Word('застону//_устар._', 6),
  plural1stPerson: Word('застону//_устар._', 6),
  plural2ndPerson: Word('застону//_устар._', 6),
  plural3rdPerson: Word('застону//_устар._', 6),
  masculinePast: Word('застонал', 6),
  femininePast: Word('застонала', 6),
  neuterPast: Word('застонало', 6),
  pluralPast: Word('застонали', 6),
  imperativeInformal: Word('застону//_устари', 15),
  imperativeFormal: Word('застону//_устарите', 15),
  imperfect: [],
};

perfectVerbs.set(застонать.name.text, застонать);

export { застонать };