import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестаиваться: PerfectVerb = {
  name: Word('перестаиваться', 6),
  singular1stPerson: Word('перестаиваюсь', 6),
  singular2ndPerson: Word('перестаиваешься', 6),
  singular3rdPerson: Word('перестаивается', 6),
  plural1stPerson: Word('перестаиваемся', 6),
  plural2ndPerson: Word('перестаиваетесь', 6),
  plural3rdPerson: Word('перестаиваются', 6),
  masculinePast: Word('перестаивался', 6),
  femininePast: Word('перестаивалась', 6),
  neuterPast: Word('перестаивалось', 6),
  pluralPast: Word('перестаивались', 6),
  imperativeInformal: Word('перестаивайся', 6),
  imperativeFormal: Word('перестаивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перестаиваться.name.text, перестаиваться);

export { перестаиваться };