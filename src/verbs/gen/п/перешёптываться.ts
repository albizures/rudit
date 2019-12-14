import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешёптываться: PerfectVerb = {
  name: Word('перешёптываться', 5),
  singular1stPerson: Word('перешёптываюсь', 5),
  singular2ndPerson: Word('перешёптываешься', 5),
  singular3rdPerson: Word('перешёптывается', 5),
  plural1stPerson: Word('перешёптываемся', 5),
  plural2ndPerson: Word('перешёптываетесь', 5),
  plural3rdPerson: Word('перешёптываются', 5),
  masculinePast: Word('перешёптывался', 5),
  femininePast: Word('перешёптывалась', 5),
  neuterPast: Word('перешёптывалось', 5),
  pluralPast: Word('перешёптывались', 5),
  imperativeInformal: Word('перешёптывайся', 5),
  imperativeFormal: Word('перешёптывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перешёптываться.name.text, перешёптываться);

export { перешёптываться };