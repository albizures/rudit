import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покоряться: PerfectVerb = {
  name: Word('покоряться', 5),
  singular1stPerson: Word('покоряюсь', 5),
  singular2ndPerson: Word('покоряешься', 5),
  singular3rdPerson: Word('покоряется', 5),
  plural1stPerson: Word('покоряемся', 5),
  plural2ndPerson: Word('покоряетесь', 5),
  plural3rdPerson: Word('покоряются', 5),
  masculinePast: Word('покорялся', 5),
  femininePast: Word('покорялась', 5),
  neuterPast: Word('покорялось', 5),
  pluralPast: Word('покорялись', 5),
  imperativeInformal: Word('покоряйся', 5),
  imperativeFormal: Word('покоряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покоряться.name.text, покоряться);

export { покоряться };