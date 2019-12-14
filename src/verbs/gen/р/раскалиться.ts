import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскалиться: PerfectVerb = {
  name: Word('раскалиться', 6),
  singular1stPerson: Word('раскалюсь', 6),
  singular2ndPerson: Word('раскалишься', 6),
  singular3rdPerson: Word('раскалится', 6),
  plural1stPerson: Word('раскалимся', 6),
  plural2ndPerson: Word('раскалитесь', 6),
  plural3rdPerson: Word('раскалятся', 6),
  masculinePast: Word('раскалился', 6),
  femininePast: Word('раскалилась', 6),
  neuterPast: Word('раскалилось', 6),
  pluralPast: Word('раскалились', 6),
  imperativeInformal: Word('раскались', 6),
  imperativeFormal: Word('раскалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскалиться.name.text, раскалиться);

export { раскалиться };