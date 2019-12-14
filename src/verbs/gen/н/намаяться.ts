import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намаяться: PerfectVerb = {
  name: Word('намаяться', 3),
  singular1stPerson: Word('намаюсь', 3),
  singular2ndPerson: Word('намаешься', 3),
  singular3rdPerson: Word('намается', 3),
  plural1stPerson: Word('намаемся', 3),
  plural2ndPerson: Word('намаетесь', 3),
  plural3rdPerson: Word('намаются', 3),
  masculinePast: Word('намаялся', 3),
  femininePast: Word('намаялась', 3),
  neuterPast: Word('намаялось', 3),
  pluralPast: Word('намаялись', 3),
  imperativeInformal: Word('намайся', 3),
  imperativeFormal: Word('намайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намаяться.name.text, намаяться);

export { намаяться };