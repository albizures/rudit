import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощадить: PerfectVerb = {
  name: Word('пощадить', 5),
  singular1stPerson: Word('пощажу', 5),
  singular2ndPerson: Word('пощадишь', 5),
  singular3rdPerson: Word('пощадит', 5),
  plural1stPerson: Word('пощадим', 5),
  plural2ndPerson: Word('пощадите', 5),
  plural3rdPerson: Word('пощадят', 5),
  masculinePast: Word('пощадил', 5),
  femininePast: Word('пощадила', 5),
  neuterPast: Word('пощадило', 5),
  pluralPast: Word('пощадили', 5),
  imperativeInformal: Word('пощади', 5),
  imperativeFormal: Word('пощадите', 5),
  imperfect: ['щадить'],
};

perfectVerbs.set(пощадить.name.text, пощадить);

export { пощадить };