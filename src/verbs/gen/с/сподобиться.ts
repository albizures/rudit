import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сподобиться: PerfectVerb = {
  name: Word('сподобиться', 4),
  singular1stPerson: Word('сподоблюсь', 4),
  singular2ndPerson: Word('сподобишься', 4),
  singular3rdPerson: Word('сподобится', 4),
  plural1stPerson: Word('сподобимся', 4),
  plural2ndPerson: Word('сподобитесь', 4),
  plural3rdPerson: Word('сподобятся', 4),
  masculinePast: Word('сподобился', 4),
  femininePast: Word('сподобилась', 4),
  neuterPast: Word('сподобилось', 4),
  pluralPast: Word('сподобились', 4),
  imperativeInformal: Word('сподобься', 4),
  imperativeFormal: Word('сподобьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сподобиться.name.text, сподобиться);

export { сподобиться };