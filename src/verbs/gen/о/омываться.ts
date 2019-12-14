import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омываться: PerfectVerb = {
  name: Word('омываться', 4),
  singular1stPerson: Word('омываюсь', 4),
  singular2ndPerson: Word('омываешься', 4),
  singular3rdPerson: Word('омывается', 4),
  plural1stPerson: Word('омываемся', 4),
  plural2ndPerson: Word('омываетесь', 4),
  plural3rdPerson: Word('омываются', 4),
  masculinePast: Word('омывался', 4),
  femininePast: Word('омывалась', 4),
  neuterPast: Word('омывалось', 4),
  pluralPast: Word('омывались', 4),
  imperativeInformal: Word('омывайся', 4),
  imperativeFormal: Word('омывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(омываться.name.text, омываться);

export { омываться };