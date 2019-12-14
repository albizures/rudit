import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понадобиться: PerfectVerb = {
  name: Word('понадобиться', 3),
  singular1stPerson: Word('понадоблюсь', 3),
  singular2ndPerson: Word('понадобишься', 3),
  singular3rdPerson: Word('понадобится', 3),
  plural1stPerson: Word('понадобимся', 3),
  plural2ndPerson: Word('понадобитесь', 3),
  plural3rdPerson: Word('понадобятся', 3),
  masculinePast: Word('понадобился', 3),
  femininePast: Word('понадобилась', 3),
  neuterPast: Word('понадобилось', 3),
  pluralPast: Word('понадобились', 3),
  imperativeInformal: Word('понадобься', 3),
  imperativeFormal: Word('понадобьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(понадобиться.name.text, понадобиться);

export { понадобиться };