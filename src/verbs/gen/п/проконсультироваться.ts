import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проконсультироваться: PerfectVerb = {
  name: Word('проконсультироваться', 11),
  singular1stPerson: Word('проконсультируюсь', 11),
  singular2ndPerson: Word('проконсультируешься', 11),
  singular3rdPerson: Word('проконсультируется', 11),
  plural1stPerson: Word('проконсультируемся', 11),
  plural2ndPerson: Word('проконсультируетесь', 11),
  plural3rdPerson: Word('проконсультируются', 11),
  masculinePast: Word('проконсультировался', 11),
  femininePast: Word('проконсультировалась', 11),
  neuterPast: Word('проконсультировалось', 11),
  pluralPast: Word('проконсультировались', 11),
  imperativeInformal: Word('проконсультируйся', 11),
  imperativeFormal: Word('проконсультируйтесь', 11),
  imperfect: [],
};

perfectVerbs.set(проконсультироваться.name.text, проконсультироваться);

export { проконсультироваться };