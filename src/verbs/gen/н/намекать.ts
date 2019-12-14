import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намекать: PerfectVerb = {
  name: Word('намекать', 5),
  singular1stPerson: Word('намекаю', 5),
  singular2ndPerson: Word('намекаешь', 5),
  singular3rdPerson: Word('намекает', 5),
  plural1stPerson: Word('намекаем', 5),
  plural2ndPerson: Word('намекаете', 5),
  plural3rdPerson: Word('намекают', 5),
  masculinePast: Word('намекал', 5),
  femininePast: Word('намекала', 5),
  neuterPast: Word('намекало', 5),
  pluralPast: Word('намекали', 5),
  imperativeInformal: Word('намекай', 5),
  imperativeFormal: Word('намекайте', 5),
  imperfect: ['намекнуть'],
};

perfectVerbs.set(намекать.name.text, намекать);

export { намекать };