import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намереваться: PerfectVerb = {
  name: Word('намереваться', 7),
  singular1stPerson: Word('намереваюсь', 7),
  singular2ndPerson: Word('намереваешься', 7),
  singular3rdPerson: Word('намеревается', 7),
  plural1stPerson: Word('намереваемся', 7),
  plural2ndPerson: Word('намереваетесь', 7),
  plural3rdPerson: Word('намереваются', 7),
  masculinePast: Word('намеревался', 7),
  femininePast: Word('намеревалась', 7),
  neuterPast: Word('намеревалось', 7),
  pluralPast: Word('намеревались', 7),
  imperativeInformal: Word('намеревайся', 7),
  imperativeFormal: Word('намеревайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(намереваться.name.text, намереваться);

export { намереваться };