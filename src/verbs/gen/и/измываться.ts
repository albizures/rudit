import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измываться: PerfectVerb = {
  name: Word('измываться', 5),
  singular1stPerson: Word('измываюсь', 5),
  singular2ndPerson: Word('измываешься', 5),
  singular3rdPerson: Word('измывается', 5),
  plural1stPerson: Word('измываемся', 5),
  plural2ndPerson: Word('измываетесь', 5),
  plural3rdPerson: Word('измываются', 5),
  masculinePast: Word('измывался', 5),
  femininePast: Word('измывалась', 5),
  neuterPast: Word('измывалось', 5),
  pluralPast: Word('измывались', 5),
  imperativeInformal: Word('измывайся', 5),
  imperativeFormal: Word('измывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(измываться.name.text, измываться);

export { измываться };