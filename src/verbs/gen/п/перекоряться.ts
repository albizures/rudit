import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекоряться: PerfectVerb = {
  name: Word('перекоряться', 7),
  singular1stPerson: Word('перекоряюсь', 7),
  singular2ndPerson: Word('перекоряешься', 7),
  singular3rdPerson: Word('перекоряется', 7),
  plural1stPerson: Word('перекоряемся', 7),
  plural2ndPerson: Word('перекоряетесь', 7),
  plural3rdPerson: Word('перекоряются', 7),
  masculinePast: Word('перекорялся', 7),
  femininePast: Word('перекорялась', 7),
  neuterPast: Word('перекорялось', 7),
  pluralPast: Word('перекорялись', 7),
  imperativeInformal: Word('перекоряйся', 7),
  imperativeFormal: Word('перекоряйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перекоряться.name.text, перекоряться);

export { перекоряться };