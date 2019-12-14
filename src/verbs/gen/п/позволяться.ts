import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позволяться: PerfectVerb = {
  name: Word('позволяться', 6),
  singular1stPerson: Word('позволяюсь', 6),
  singular2ndPerson: Word('позволяешься', 6),
  singular3rdPerson: Word('позволяется', 6),
  plural1stPerson: Word('позволяемся', 6),
  plural2ndPerson: Word('позволяетесь', 6),
  plural3rdPerson: Word('позволяются', 6),
  masculinePast: Word('позволялся', 6),
  femininePast: Word('позволялась', 6),
  neuterPast: Word('позволялось', 6),
  pluralPast: Word('позволялись', 6),
  imperativeInformal: Word('позволяйся', 6),
  imperativeFormal: Word('позволяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(позволяться.name.text, позволяться);

export { позволяться };