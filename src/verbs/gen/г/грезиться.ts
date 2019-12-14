import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грезиться: PerfectVerb = {
  name: Word('грезиться', 2),
  singular1stPerson: Word('грежусь', 2),
  singular2ndPerson: Word('грезишься', 2),
  singular3rdPerson: Word('грезится', 2),
  plural1stPerson: Word('грезимся', 2),
  plural2ndPerson: Word('грезитесь', 2),
  plural3rdPerson: Word('грезятся', 2),
  masculinePast: Word('грезился', 2),
  femininePast: Word('грезилась', 2),
  neuterPast: Word('грезилось', 2),
  pluralPast: Word('грезились', 2),
  imperativeInformal: Word('грезься', 2),
  imperativeFormal: Word('грезьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(грезиться.name.text, грезиться);

export { грезиться };