import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размечтаться: PerfectVerb = {
  name: Word('размечтаться', 7),
  singular1stPerson: Word('размечтаюсь', 7),
  singular2ndPerson: Word('размечтаешься', 7),
  singular3rdPerson: Word('размечтается', 7),
  plural1stPerson: Word('размечтаемся', 7),
  plural2ndPerson: Word('размечтаетесь', 7),
  plural3rdPerson: Word('размечтаются', 7),
  masculinePast: Word('размечтался', 7),
  femininePast: Word('размечталась', 7),
  neuterPast: Word('размечталось', 7),
  pluralPast: Word('размечтались', 7),
  imperativeInformal: Word('размечтайся', 7),
  imperativeFormal: Word('размечтайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(размечтаться.name.text, размечтаться);

export { размечтаться };