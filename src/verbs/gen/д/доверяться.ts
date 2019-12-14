import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доверяться: PerfectVerb = {
  name: Word('доверяться', 5),
  singular1stPerson: Word('доверяюсь', 5),
  singular2ndPerson: Word('доверяешься', 5),
  singular3rdPerson: Word('доверяется', 5),
  plural1stPerson: Word('доверяемся', 5),
  plural2ndPerson: Word('доверяетесь', 5),
  plural3rdPerson: Word('доверяются', 5),
  masculinePast: Word('доверялся', 5),
  femininePast: Word('доверялась', 5),
  neuterPast: Word('доверялось', 5),
  pluralPast: Word('доверялись', 5),
  imperativeInformal: Word('доверяйся', 5),
  imperativeFormal: Word('доверяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(доверяться.name.text, доверяться);

export { доверяться };