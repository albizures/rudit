import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджариваться: PerfectVerb = {
  name: Word('поджариваться', 4),
  singular1stPerson: Word('поджариваюсь', 4),
  singular2ndPerson: Word('поджариваешься', 4),
  singular3rdPerson: Word('поджаривается', 4),
  plural1stPerson: Word('поджариваемся', 4),
  plural2ndPerson: Word('поджариваетесь', 4),
  plural3rdPerson: Word('поджариваются', 4),
  masculinePast: Word('поджаривался', 4),
  femininePast: Word('поджаривалась', 4),
  neuterPast: Word('поджаривалось', 4),
  pluralPast: Word('поджаривались', 4),
  imperativeInformal: Word('поджаривайся', 4),
  imperativeFormal: Word('поджаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поджариваться.name.text, поджариваться);

export { поджариваться };