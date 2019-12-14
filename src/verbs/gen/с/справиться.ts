import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const справиться: PerfectVerb = {
  name: Word('справиться', 3),
  singular1stPerson: Word('справлюсь', 3),
  singular2ndPerson: Word('справишься', 3),
  singular3rdPerson: Word('справится', 3),
  plural1stPerson: Word('справимся', 3),
  plural2ndPerson: Word('справитесь', 3),
  plural3rdPerson: Word('справятся', 3),
  masculinePast: Word('справился', 3),
  femininePast: Word('справилась', 3),
  neuterPast: Word('справилось', 3),
  pluralPast: Word('справились', 3),
  imperativeInformal: Word('справься', 3),
  imperativeFormal: Word('справьтесь', 3),
  imperfect: ['справляться'],
};

perfectVerbs.set(справиться.name.text, справиться);

export { справиться };