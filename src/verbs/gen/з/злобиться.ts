import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злобиться: PerfectVerb = {
  name: Word('злобиться', 2),
  singular1stPerson: Word('злоблюсь', 2),
  singular2ndPerson: Word('злобишься', 2),
  singular3rdPerson: Word('злобится', 2),
  plural1stPerson: Word('злобимся', 2),
  plural2ndPerson: Word('злобитесь', 2),
  plural3rdPerson: Word('злобятся', 2),
  masculinePast: Word('злобился', 2),
  femininePast: Word('злобилась', 2),
  neuterPast: Word('злобилось', 2),
  pluralPast: Word('злобились', 2),
  imperativeInformal: Word('злобься', 2),
  imperativeFormal: Word('злобьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(злобиться.name.text, злобиться);

export { злобиться };