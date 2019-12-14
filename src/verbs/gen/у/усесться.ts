import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усесться: PerfectVerb = {
  name: Word('усесться', 2),
  singular1stPerson: Word('усядусь', 2),
  singular2ndPerson: Word('усядешься', 2),
  singular3rdPerson: Word('усядется', 2),
  plural1stPerson: Word('усядемся', 2),
  plural2ndPerson: Word('усядетесь', 2),
  plural3rdPerson: Word('усядутся', 2),
  masculinePast: Word('уселся', 2),
  femininePast: Word('уселась', 2),
  neuterPast: Word('уселось', 2),
  pluralPast: Word('уселись', 2),
  imperativeInformal: Word('усядься', 2),
  imperativeFormal: Word('усядьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(усесться.name.text, усесться);

export { усесться };