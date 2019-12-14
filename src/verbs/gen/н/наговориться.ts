import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наговориться: PerfectVerb = {
  name: Word('наговориться', 7),
  singular1stPerson: Word('наговорюсь', 7),
  singular2ndPerson: Word('наговоришься', 7),
  singular3rdPerson: Word('наговорится', 7),
  plural1stPerson: Word('наговоримся', 7),
  plural2ndPerson: Word('наговоритесь', 7),
  plural3rdPerson: Word('наговорятся', 7),
  masculinePast: Word('наговорился', 7),
  femininePast: Word('наговорилась', 7),
  neuterPast: Word('наговорилось', 7),
  pluralPast: Word('наговорились', 7),
  imperativeInformal: Word('наговорись', 7),
  imperativeFormal: Word('наговоритесь', 7),
  imperfect: [],
};

perfectVerbs.set(наговориться.name.text, наговориться);

export { наговориться };