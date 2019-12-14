import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начитывать: PerfectVerb = {
  name: Word('начитывать', 3),
  singular1stPerson: Word('начитываю', 3),
  singular2ndPerson: Word('начитываешь', 3),
  singular3rdPerson: Word('начитывает', 3),
  plural1stPerson: Word('начитываем', 3),
  plural2ndPerson: Word('начитываете', 3),
  plural3rdPerson: Word('начитывают', 3),
  masculinePast: Word('начитывал', 3),
  femininePast: Word('начитывала', 3),
  neuterPast: Word('начитывало', 3),
  pluralPast: Word('начитывали', 3),
  imperativeInformal: Word('начитывай', 3),
  imperativeFormal: Word('начитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(начитывать.name.text, начитывать);

export { начитывать };