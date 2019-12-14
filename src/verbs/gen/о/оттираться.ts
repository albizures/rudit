import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттираться: PerfectVerb = {
  name: Word('оттираться', 5),
  singular1stPerson: Word('оттираюсь', 5),
  singular2ndPerson: Word('оттираешься', 5),
  singular3rdPerson: Word('оттирается', 5),
  plural1stPerson: Word('оттираемся', 5),
  plural2ndPerson: Word('оттираетесь', 5),
  plural3rdPerson: Word('оттираются', 5),
  masculinePast: Word('оттирался', 5),
  femininePast: Word('оттиралась', 5),
  neuterPast: Word('оттиралось', 5),
  pluralPast: Word('оттирались', 5),
  imperativeInformal: Word('оттирайся', 5),
  imperativeFormal: Word('оттирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оттираться.name.text, оттираться);

export { оттираться };