import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестраиваться: PerfectVerb = {
  name: Word('перестраиваться', 7),
  singular1stPerson: Word('перестраиваюсь', 7),
  singular2ndPerson: Word('перестраиваешься', 7),
  singular3rdPerson: Word('перестраивается', 7),
  plural1stPerson: Word('перестраиваемся', 7),
  plural2ndPerson: Word('перестраиваетесь', 7),
  plural3rdPerson: Word('перестраиваются', 7),
  masculinePast: Word('перестраивался', 7),
  femininePast: Word('перестраивалась', 7),
  neuterPast: Word('перестраивалось', 7),
  pluralPast: Word('перестраивались', 7),
  imperativeInformal: Word('перестраивайся', 7),
  imperativeFormal: Word('перестраивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перестраиваться.name.text, перестраиваться);

export { перестраиваться };