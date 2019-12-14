import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заговариваться: PerfectVerb = {
  name: Word('заговариваться', 5),
  singular1stPerson: Word('заговариваюсь', 5),
  singular2ndPerson: Word('заговариваешься', 5),
  singular3rdPerson: Word('заговаривается', 5),
  plural1stPerson: Word('заговариваемся', 5),
  plural2ndPerson: Word('заговариваетесь', 5),
  plural3rdPerson: Word('заговариваются', 5),
  masculinePast: Word('заговаривался', 5),
  femininePast: Word('заговаривалась', 5),
  neuterPast: Word('заговаривалось', 5),
  pluralPast: Word('заговаривались', 5),
  imperativeInformal: Word('заговаривайся', 5),
  imperativeFormal: Word('заговаривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заговариваться.name.text, заговариваться);

export { заговариваться };