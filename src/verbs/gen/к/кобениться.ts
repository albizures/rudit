import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кобениться: PerfectVerb = {
  name: Word('кобениться', 3),
  singular1stPerson: Word('кобенюсь', 3),
  singular2ndPerson: Word('кобенишься', 3),
  singular3rdPerson: Word('кобенится', 3),
  plural1stPerson: Word('кобенимся', 3),
  plural2ndPerson: Word('кобенитесь', 3),
  plural3rdPerson: Word('кобенятся', 3),
  masculinePast: Word('кобенился', 3),
  femininePast: Word('кобенилась', 3),
  neuterPast: Word('кобенилось', 3),
  pluralPast: Word('кобенились', 3),
  imperativeInformal: Word('кобенься', 3),
  imperativeFormal: Word('кобеньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(кобениться.name.text, кобениться);

export { кобениться };