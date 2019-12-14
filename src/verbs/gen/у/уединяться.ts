import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уединяться: PerfectVerb = {
  name: Word('уединяться', 5),
  singular1stPerson: Word('уединяюсь', 5),
  singular2ndPerson: Word('уединяешься', 5),
  singular3rdPerson: Word('уединяется', 5),
  plural1stPerson: Word('уединяемся', 5),
  plural2ndPerson: Word('уединяетесь', 5),
  plural3rdPerson: Word('уединяются', 5),
  masculinePast: Word('уединялся', 5),
  femininePast: Word('уединялась', 5),
  neuterPast: Word('уединялось', 5),
  pluralPast: Word('уединялись', 5),
  imperativeInformal: Word('уединяйся', 5),
  imperativeFormal: Word('уединяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(уединяться.name.text, уединяться);

export { уединяться };