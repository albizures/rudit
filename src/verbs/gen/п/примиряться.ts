import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примиряться: PerfectVerb = {
  name: Word('примиряться', 6),
  singular1stPerson: Word('примиряюсь', 6),
  singular2ndPerson: Word('примиряешься', 6),
  singular3rdPerson: Word('примиряется', 6),
  plural1stPerson: Word('примиряемся', 6),
  plural2ndPerson: Word('примиряетесь', 6),
  plural3rdPerson: Word('примиряются', 6),
  masculinePast: Word('примирялся', 6),
  femininePast: Word('примирялась', 6),
  neuterPast: Word('примирялось', 6),
  pluralPast: Word('примирялись', 6),
  imperativeInformal: Word('примиряйся', 6),
  imperativeFormal: Word('примиряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(примиряться.name.text, примиряться);

export { примиряться };