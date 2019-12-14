import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озлобиться: PerfectVerb = {
  name: Word('озлобиться', 3),
  singular1stPerson: Word('озлоблюсь', 3),
  singular2ndPerson: Word('озлобишься', 3),
  singular3rdPerson: Word('озлобится', 3),
  plural1stPerson: Word('озлобимся', 3),
  plural2ndPerson: Word('озлобитесь', 3),
  plural3rdPerson: Word('озлобятся', 3),
  masculinePast: Word('озлобился', 3),
  femininePast: Word('озлобилась', 3),
  neuterPast: Word('озлобилось', 3),
  pluralPast: Word('озлобились', 3),
  imperativeInformal: Word('озлобься', 3),
  imperativeFormal: Word('озлобьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(озлобиться.name.text, озлобиться);

export { озлобиться };