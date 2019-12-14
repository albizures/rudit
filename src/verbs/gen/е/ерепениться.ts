import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ерепениться: PerfectVerb = {
  name: Word('ерепениться', 4),
  singular1stPerson: Word('ерепенюсь', 4),
  singular2ndPerson: Word('ерепенишься', 4),
  singular3rdPerson: Word('ерепенится', 4),
  plural1stPerson: Word('ерепенимся', 4),
  plural2ndPerson: Word('ерепенитесь', 4),
  plural3rdPerson: Word('ерепенятся', 4),
  masculinePast: Word('ерепенился', 4),
  femininePast: Word('ерепенилась', 4),
  neuterPast: Word('ерепенилось', 4),
  pluralPast: Word('ерепенились', 4),
  imperativeInformal: Word('ерепенься', 4),
  imperativeFormal: Word('ерепеньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ерепениться.name.text, ерепениться);

export { ерепениться };