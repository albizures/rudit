import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намываться: PerfectVerb = {
  name: Word('намываться', 5),
  singular1stPerson: Word('намываюсь', 5),
  singular2ndPerson: Word('намываешься', 5),
  singular3rdPerson: Word('намывается', 5),
  plural1stPerson: Word('намываемся', 5),
  plural2ndPerson: Word('намываетесь', 5),
  plural3rdPerson: Word('намываются', 5),
  masculinePast: Word('намывался', 5),
  femininePast: Word('намывалась', 5),
  neuterPast: Word('намывалось', 5),
  pluralPast: Word('намывались', 5),
  imperativeInformal: Word('намывайся', 5),
  imperativeFormal: Word('намывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(намываться.name.text, намываться);

export { намываться };