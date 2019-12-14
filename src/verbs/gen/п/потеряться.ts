import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потеряться: PerfectVerb = {
  name: Word('потеряться', 5),
  singular1stPerson: Word('потеряюсь', 5),
  singular2ndPerson: Word('потеряешься', 5),
  singular3rdPerson: Word('потеряется', 5),
  plural1stPerson: Word('потеряемся', 5),
  plural2ndPerson: Word('потеряетесь', 5),
  plural3rdPerson: Word('потеряются', 5),
  masculinePast: Word('потерялся', 5),
  femininePast: Word('потерялась', 5),
  neuterPast: Word('потерялось', 5),
  pluralPast: Word('потерялись', 5),
  imperativeInformal: Word('потеряйся', 5),
  imperativeFormal: Word('потеряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(потеряться.name.text, потеряться);

export { потеряться };