import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосредоточиться: PerfectVerb = {
  name: Word('сосредоточиться', 8),
  singular1stPerson: Word('сосредоточусь', 8),
  singular2ndPerson: Word('сосредоточишься', 8),
  singular3rdPerson: Word('сосредоточится', 8),
  plural1stPerson: Word('сосредоточимся', 8),
  plural2ndPerson: Word('сосредоточитесь', 8),
  plural3rdPerson: Word('сосредоточатся', 8),
  masculinePast: Word('сосредоточился', 8),
  femininePast: Word('сосредоточилась', 8),
  neuterPast: Word('сосредоточилось', 8),
  pluralPast: Word('сосредоточились', 8),
  imperativeInformal: Word('сосредоточься', 8),
  imperativeFormal: Word('сосредоточьтесь', 8),
  imperfect: [],
};

perfectVerbs.set(сосредоточиться.name.text, сосредоточиться);

export { сосредоточиться };