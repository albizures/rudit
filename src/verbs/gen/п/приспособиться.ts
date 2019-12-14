import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспособиться: PerfectVerb = {
  name: Word('приспособиться', 7),
  singular1stPerson: Word('приспособлюсь', 7),
  singular2ndPerson: Word('приспособишься', 7),
  singular3rdPerson: Word('приспособится', 7),
  plural1stPerson: Word('приспособимся', 7),
  plural2ndPerson: Word('приспособитесь', 7),
  plural3rdPerson: Word('приспособятся', 7),
  masculinePast: Word('приспособился', 7),
  femininePast: Word('приспособилась', 7),
  neuterPast: Word('приспособилось', 7),
  pluralPast: Word('приспособились', 7),
  imperativeInformal: Word('приспособься', 7),
  imperativeFormal: Word('приспособьтесь', 7),
  imperfect: ['приспосабливаться'],
};

perfectVerbs.set(приспособиться.name.text, приспособиться);

export { приспособиться };