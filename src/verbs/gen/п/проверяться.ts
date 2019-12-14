import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проверяться: PerfectVerb = {
  name: Word('проверяться', 6),
  singular1stPerson: Word('проверяюсь', 6),
  singular2ndPerson: Word('проверяешься', 6),
  singular3rdPerson: Word('проверяется', 6),
  plural1stPerson: Word('проверяемся', 6),
  plural2ndPerson: Word('проверяетесь', 6),
  plural3rdPerson: Word('проверяются', 6),
  masculinePast: Word('проверялся', 6),
  femininePast: Word('проверялась', 6),
  neuterPast: Word('проверялось', 6),
  pluralPast: Word('проверялись', 6),
  imperativeInformal: Word('проверяйся', 6),
  imperativeFormal: Word('проверяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проверяться.name.text, проверяться);

export { проверяться };