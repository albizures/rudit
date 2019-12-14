import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжалиться: PerfectVerb = {
  name: Word('сжалиться', 2),
  singular1stPerson: Word('сжалюсь', 2),
  singular2ndPerson: Word('сжалишься', 2),
  singular3rdPerson: Word('сжалится', 2),
  plural1stPerson: Word('сжалимся', 2),
  plural2ndPerson: Word('сжалитесь', 2),
  plural3rdPerson: Word('сжалятся', 2),
  masculinePast: Word('сжалился', 2),
  femininePast: Word('сжалилась', 2),
  neuterPast: Word('сжалилось', 2),
  pluralPast: Word('сжалились', 2),
  imperativeInformal: Word('сжалься', 2),
  imperativeFormal: Word('сжальтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сжалиться.name.text, сжалиться);

export { сжалиться };