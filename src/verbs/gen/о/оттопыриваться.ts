import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттопыриваться: PerfectVerb = {
  name: Word('оттопыриваться', 5),
  singular1stPerson: Word('оттопыриваюсь', 5),
  singular2ndPerson: Word('оттопыриваешься', 5),
  singular3rdPerson: Word('оттопыривается', 5),
  plural1stPerson: Word('оттопыриваемся', 5),
  plural2ndPerson: Word('оттопыриваетесь', 5),
  plural3rdPerson: Word('оттопыриваются', 5),
  masculinePast: Word('оттопыривался', 5),
  femininePast: Word('оттопыривалась', 5),
  neuterPast: Word('оттопыривалось', 5),
  pluralPast: Word('оттопыривались', 5),
  imperativeInformal: Word('оттопыривайся', 5),
  imperativeFormal: Word('оттопыривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оттопыриваться.name.text, оттопыриваться);

export { оттопыриваться };