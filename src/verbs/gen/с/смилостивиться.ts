import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смилостивиться: PerfectVerb = {
  name: Word('смилостивиться', 2),
  singular1stPerson: Word('смилостивлюсь', 2),
  singular2ndPerson: Word('смилостивишься', 2),
  singular3rdPerson: Word('смилостивится', 2),
  plural1stPerson: Word('смилостивимся', 2),
  plural2ndPerson: Word('смилостивитесь', 2),
  plural3rdPerson: Word('смилостивятся', 2),
  masculinePast: Word('смилостивился', 2),
  femininePast: Word('смилостивилась', 2),
  neuterPast: Word('смилостивилось', 2),
  pluralPast: Word('смилостивились', 2),
  imperativeInformal: Word('смилостивься', 2),
  imperativeFormal: Word('смилостивьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смилостивиться.name.text, смилостивиться);

export { смилостивиться };