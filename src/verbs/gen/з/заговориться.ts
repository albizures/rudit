import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заговориться: PerfectVerb = {
  name: Word('заговориться', 7),
  singular1stPerson: Word('заговорюсь', 7),
  singular2ndPerson: Word('заговоришься', 7),
  singular3rdPerson: Word('заговорится', 7),
  plural1stPerson: Word('заговоримся', 7),
  plural2ndPerson: Word('заговоритесь', 7),
  plural3rdPerson: Word('заговорятся', 7),
  masculinePast: Word('заговорился', 7),
  femininePast: Word('заговорилась', 7),
  neuterPast: Word('заговорилось', 7),
  pluralPast: Word('заговорились', 7),
  imperativeInformal: Word('заговорись', 7),
  imperativeFormal: Word('заговоритесь', 7),
  imperfect: [],
};

perfectVerbs.set(заговориться.name.text, заговориться);

export { заговориться };