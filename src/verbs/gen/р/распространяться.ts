import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распространяться: PerfectVerb = {
  name: Word('распространяться', 11),
  singular1stPerson: Word('распространяюсь', 11),
  singular2ndPerson: Word('распространяешься', 11),
  singular3rdPerson: Word('распространяется', 11),
  plural1stPerson: Word('распространяемся', 11),
  plural2ndPerson: Word('распространяетесь', 11),
  plural3rdPerson: Word('распространяются', 11),
  masculinePast: Word('распространялся', 11),
  femininePast: Word('распространялась', 11),
  neuterPast: Word('распространялось', 11),
  pluralPast: Word('распространялись', 11),
  imperativeInformal: Word('распространяйся', 11),
  imperativeFormal: Word('распространяйтесь', 11),
  imperfect: ['распространиться'],
};

perfectVerbs.set(распространяться.name.text, распространяться);

export { распространяться };