import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const валяться: PerfectVerb = {
  name: Word('валяться', 3),
  singular1stPerson: Word('валяюсь', 3),
  singular2ndPerson: Word('валяешься', 3),
  singular3rdPerson: Word('валяется', 3),
  plural1stPerson: Word('валяемся', 3),
  plural2ndPerson: Word('валяетесь', 3),
  plural3rdPerson: Word('валяются', 3),
  masculinePast: Word('валялся', 3),
  femininePast: Word('валялась', 3),
  neuterPast: Word('валялось', 3),
  pluralPast: Word('валялись', 3),
  imperativeInformal: Word('валяйся', 3),
  imperativeFormal: Word('валяйтесь', 3),
  imperfect: ['поваляться'],
};

perfectVerbs.set(валяться.name.text, валяться);

export { валяться };