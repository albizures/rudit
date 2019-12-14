import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засоряться: PerfectVerb = {
  name: Word('засоряться', 5),
  singular1stPerson: Word('засоряюсь', 5),
  singular2ndPerson: Word('засоряешься', 5),
  singular3rdPerson: Word('засоряется', 5),
  plural1stPerson: Word('засоряемся', 5),
  plural2ndPerson: Word('засоряетесь', 5),
  plural3rdPerson: Word('засоряются', 5),
  masculinePast: Word('засорялся', 5),
  femininePast: Word('засорялась', 5),
  neuterPast: Word('засорялось', 5),
  pluralPast: Word('засорялись', 5),
  imperativeInformal: Word('засоряйся', 5),
  imperativeFormal: Word('засоряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(засоряться.name.text, засоряться);

export { засоряться };