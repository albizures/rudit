import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пялиться: PerfectVerb = {
  name: Word('пялиться', 1),
  singular1stPerson: Word('пялюсь', 1),
  singular2ndPerson: Word('пялишься', 1),
  singular3rdPerson: Word('пялится', 1),
  plural1stPerson: Word('пялимся', 1),
  plural2ndPerson: Word('пялитесь', 1),
  plural3rdPerson: Word('пялятся', 1),
  masculinePast: Word('пялился', 1),
  femininePast: Word('пялилась', 1),
  neuterPast: Word('пялилось', 1),
  pluralPast: Word('пялились', 1),
  imperativeInformal: Word('пялься', 1),
  imperativeFormal: Word('пяльтесь', 1),
  imperfect: [],
};

perfectVerbs.set(пялиться.name.text, пялиться);

export { пялиться };