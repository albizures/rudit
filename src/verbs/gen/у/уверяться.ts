import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уверяться: PerfectVerb = {
  name: Word('уверяться', 4),
  singular1stPerson: Word('уверяюсь', 4),
  singular2ndPerson: Word('уверяешься', 4),
  singular3rdPerson: Word('уверяется', 4),
  plural1stPerson: Word('уверяемся', 4),
  plural2ndPerson: Word('уверяетесь', 4),
  plural3rdPerson: Word('уверяются', 4),
  masculinePast: Word('уверялся', 4),
  femininePast: Word('уверялась', 4),
  neuterPast: Word('уверялось', 4),
  pluralPast: Word('уверялись', 4),
  imperativeInformal: Word('уверяйся', 4),
  imperativeFormal: Word('уверяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(уверяться.name.text, уверяться);

export { уверяться };